export const useCount = () => useState<number>('count', () => 0)
export const useNavbarHover = () => useState<boolean>('navbar-hover', () => false)
export const useNavbarLength = () => useState<number>('navbar-length', () => 0)
export const useCareerId = () => useState<number>('career-id', () => 0)
