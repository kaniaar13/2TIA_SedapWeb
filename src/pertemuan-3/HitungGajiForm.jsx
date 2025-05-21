import { useState } from "react";
import { InputGaji } from "./components/InputGaji";
import { HasilGaji } from "./components/HasilGaji";

export defaulji, setGaji] = useState("");
  const pajak = 0.11;

 
  const totalGaji = gajiAngka > 0 ? gajiAngka - gajiAngka * pajak : 0;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
   t function HitungGajiForm() {
  const [ga     <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Hitung Gaji Bersih
        </h2>
        
        <InputGaji
          label="Gaji Pokok"
          type="number"
          placeholder="Masukkan jumlah gaji..."
          value={gaji}
          onChange={(e) => setGaji(e.target.value)}
        />

        <HasilGaji gaji={gajiAngka} totalGaji={totalGaji} />
      </div>
    </div>
  );
}
