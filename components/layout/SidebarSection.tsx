'use client';

import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import type { NavSection, NavGroup } from '@/lib/navigation';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
  section: NavSection;
  currentPath: string;
}

function groupContainsPath(group: NavGroup, path: string): boolean {
  if (group.items?.some(item => item.href === path)) return true;
  if (group.subgroups?.some(sg => sg.items.some(item => item.href === path))) return true;
  return false;
}

function sectionContainsPath(section: NavSection, path: string): boolean {
  if (section.groups) {
    return section.groups.some(g => groupContainsPath(g, path));
  }
  return section.items?.some(item => item.href === path) ?? false;
}

function getInitialOpenGroups(section: NavSection, path: string): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  if (!section.groups) return result;
  for (const group of section.groups) {
    if (group.isLabel) continue;
    if (groupContainsPath(group, path)) {
      result[group.slug] = true;
      if (group.subgroups) {
        for (const sg of group.subgroups) {
          if (sg.items.some(item => item.href === path)) {
            result[sg.slug] = true;
          }
        }
      }
    }
  }
  return result;
}

export default function SidebarSection({ section, currentPath }: SidebarSectionProps) {
  const isActive = sectionContainsPath(section, currentPath);
  const [isOpen, setIsOpen] = useState(isActive);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() =>
    getInitialOpenGroups(section, currentPath)
  );

  useEffect(() => {
    if (isActive) setIsOpen(true);
  }, [isActive]);

  function toggleGroup(slug: string) {
    setOpenGroups(prev => ({ ...prev, [slug]: !prev[slug] }));
  }

  return (
    <div
      className="mb-1 rounded transition-all duration-200"
      style={{
        border: isOpen ? '1px solid #2A2A2A' : '1px solid transparent',
        backgroundColor: isOpen ? '#141414' : 'transparent',
      }}
    >
      {/* Section header */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex items-center justify-between px-3 py-2 rounded text-left transition-colors duration-100 hover:bg-[#1A1A1A]"
        aria-expanded={isOpen}
        aria-controls={`section-${section.slug}`}
      >
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: '#9CA3AF', letterSpacing: '0.06em', fontSize: '11px' }}
        >
          {section.label}
        </span>
        <ChevronRight
          size={12}
          style={{
            color: '#6B7280',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 200ms ease',
            flexShrink: 0,
          }}
        />
      </button>

      {/* Section body */}
      <div
        id={`section-${section.slug}`}
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '9999px' : '0',
          transition: 'max-height 350ms ease',
        }}
      >
        {section.groups ? (
          <div className="pb-2">
            {section.groups.map(group => {
              if (group.isLabel) {
                return (
                  <div key={group.slug} className="flex items-center gap-2 px-3 pt-3 pb-1.5">
                    <span
                      style={{
                        color: '#3A3A3A',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {group.label}
                    </span>
                    <div className="flex-1 h-px" style={{ backgroundColor: '#242424' }} />
                  </div>
                );
              }

              const groupOpen = !!openGroups[group.slug];

              if (group.subgroups) {
                return (
                  <div key={group.slug}>
                    <button
                      onClick={() => toggleGroup(group.slug)}
                      className="w-full flex items-center justify-between pl-5 pr-3 py-[6px] text-left transition-colors duration-100 hover:bg-[#1A1A1A]"
                      aria-expanded={groupOpen}
                    >
                      <span
                        style={{
                          color: groupOpen ? '#9CA3AF' : '#555555',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.07em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {group.label}
                      </span>
                      <ChevronRight
                        size={10}
                        style={{
                          color: '#555555',
                          transform: groupOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 150ms ease',
                          flexShrink: 0,
                        }}
                      />
                    </button>

                    <div
                      style={{
                        overflow: 'hidden',
                        maxHeight: groupOpen ? '6000px' : '0',
                        transition: 'max-height 280ms ease',
                      }}
                    >
                      {group.subgroups.map(sg => {
                        const sgOpen = !!openGroups[sg.slug];
                        return (
                          <div key={sg.slug}>
                            <button
                              onClick={() => toggleGroup(sg.slug)}
                              className="w-full flex items-center justify-between pl-8 pr-3 py-[5px] text-left transition-colors duration-100 hover:bg-[#1A1A1A]"
                              aria-expanded={sgOpen}
                            >
                              <span
                                style={{
                                  color: sgOpen ? '#9CA3AF' : '#4A4A4A',
                                  fontSize: '10px',
                                  fontWeight: 600,
                                  letterSpacing: '0.07em',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {sg.label}
                              </span>
                              <ChevronRight
                                size={9}
                                style={{
                                  color: '#4A4A4A',
                                  transform: sgOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                  transition: 'transform 150ms ease',
                                  flexShrink: 0,
                                }}
                              />
                            </button>

                            <div
                              style={{
                                overflow: 'hidden',
                                maxHeight: sgOpen ? '3000px' : '0',
                                transition: 'max-height 200ms ease',
                              }}
                            >
                              {sg.items.map(item => (
                                <SidebarItem
                                  key={item.href}
                                  item={item}
                                  isActive={currentPath === item.href}
                                  indent={2}
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <div key={group.slug}>
                  <button
                    onClick={() => toggleGroup(group.slug)}
                    className="w-full flex items-center justify-between pl-5 pr-3 py-[6px] text-left transition-colors duration-100 hover:bg-[#1A1A1A]"
                    aria-expanded={groupOpen}
                  >
                    <span
                      style={{
                        color: groupOpen ? '#9CA3AF' : '#555555',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {group.label}
                    </span>
                    <ChevronRight
                      size={10}
                      style={{
                        color: '#555555',
                        transform: groupOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 150ms ease',
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: groupOpen ? '4000px' : '0',
                      transition: 'max-height 250ms ease',
                    }}
                  >
                    {group.items?.map(item => (
                      <SidebarItem
                        key={item.href}
                        item={item}
                        isActive={currentPath === item.href}
                        indent={1}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="pb-1">
            {section.items?.map(item => (
              <SidebarItem
                key={item.href}
                item={item}
                isActive={currentPath === item.href}
                indent={0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
