import { Retos } from "@/redux/intefaces/retos";

const numeroALetrasMap: { [key: number]: string } = {
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho",
    9: "nueve",
    10: "diez",
    11: "once",
    12: "doce"
};

export function numeroALetras(numero: number, retos: any): string {
    const letras = numeroALetrasMap[numero];
    return retos[letras];
}