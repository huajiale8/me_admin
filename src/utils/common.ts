
export function isExternal(path: string): boolean {
    return /^(https?|ftp|mailto|tel):/.test(path)
}
