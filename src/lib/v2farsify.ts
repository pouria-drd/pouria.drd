import pako from "pako";

const faAlphabet = [
    "ا",
    "ب",
    "پ",
    "ت",
    "ث",
    "ج",
    "چ",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "ژ",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ک",
    "گ",
    "ل",
    "م",
    "ن",
    "و",
    "ه",
    "ی",
];

/**
 * Compress and encode a V2Ray config string to a Persian-friendly SMS format.
 */
export function encodeConfigToSms(config: string): string {
    const compressed = pako.deflate(config);
    return toFaBase32(compressed);
}

/**
 * Decode and decompress from Persian-friendly SMS format back to original config.
 */
export function decodeSmsToConfig(faBase32Text: string): string {
    const bytes = fromFaBase32(faBase32Text);
    return pako.inflate(bytes, { to: "string" });
}

export function toFaBase32(buffer: Uint8Array): string {
    let bits = 0;
    let value = 0;
    let output = "";

    for (const byte of buffer) {
        value = (value << 8) | byte;
        bits += 8;

        while (bits >= 5) {
            bits -= 5;
            const index = (value >> bits) & 31;
            output += faAlphabet[index];
        }
    }

    if (bits > 0) {
        const index = (value << (5 - bits)) & 31;
        output += faAlphabet[index];
    }

    return output;
}

export function fromFaBase32(input: string): Uint8Array {
    const charMap = new Map<string, number>();
    faAlphabet.forEach((c, i) => charMap.set(c, i));

    let bits = 0;
    let value = 0;
    const bytes = [];

    for (const char of input) {
        const index = charMap.get(char);
        if (index === undefined) throw new Error("Invalid character");

        value = (value << 5) | index;
        bits += 5;

        if (bits >= 8) {
            bits -= 8;
            bytes.push((value >> bits) & 0xff);
        }
    }

    return new Uint8Array(bytes);
}
