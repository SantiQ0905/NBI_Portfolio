export const sectionIds = {
  profile: 'perfil',
  experience: 'experiencia',
  research: 'investigacion',
  contact: 'contacto',
} as const

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds]
