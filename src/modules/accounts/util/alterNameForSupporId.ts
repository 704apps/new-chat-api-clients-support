export function alterNameForSupporId(text: string): string {
    return text
        .toLowerCase() // Converte tudo para minúsculas
        .normalize('NFD') // Normaliza a string decompondo caracteres acentuados
        .replace(/[\u0300-\u036f]/g, '') // Remove os diacríticos (acentos)
        .replace(/ç/g, 'c') // Substitui 'ç' por 'c'
        .replace(/\s+/g, '-'); // Substitui espaços por hífens
}