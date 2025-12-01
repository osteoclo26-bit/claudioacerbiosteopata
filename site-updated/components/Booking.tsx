
"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

// 📌 LISTA TRATTAMENTI
const TREATMENTS = [
  { id: "massaggio-base", name: "Massaggio Base", price: 40, duration: "50 min" },
  { id: "massaggio-rilassante", name: "Massaggio Rilassante", price: 50, duration: "60 min" },
  { id: "massaggio-decontratturante", name: "Massaggio Decontratturante", price: 55, duration: "60 min" },
];

// 📌 ORARI DISPONIBILI
const AVAILABLE_TIMES = ["09:00","10:00","11:00","14:00","15:00","16:00","17:00"];

export default function Booking() {
  const [bookingStep, setBookingStep] = useState("treatment");
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [formData, setFormData] = useState({ name: "", phone: "" });

  const createGoogleCalendarUrl = () => {
    if (!selectedTreatment || !selectedDate || !selectedTime) return "";

    const treatment = TREATMENTS.find(t => t.id === selectedTreatment);
    const [hour, minute] = selectedTime.split(":").map(Number);

    const start = new Date(selectedDate);
    start.setHours(hour, minute);

    const end = new Date(start.getTime() + 60 * 60 * 1000);

    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d+/g, "");

    const startStr = formatDate(start);
    const endStr = formatDate(end);

    const details = `Prenotazione per ${treatment?.name}%0ACliente: ${formData.name}%0ATelefono: ${formData.phone}`;

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${
      encodeURIComponent(treatment?.name || "")
    }&dates=${startStr}/${endStr}&details=${details}`;
  };

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedTreatment && selectedDate && selectedTime && formData.name && formData.phone) {
      const treatment = TREATMENTS.find(t => t.id === selectedTreatment);
      const italianDate = selectedDate.toLocaleDateString('it-IT');

      const message =
        `📅 *Nuova prenotazione* %0A%0A` +
        `• *Trattamento:* ${treatment?.name}%0A` +
        `• *Prezzo:* €${treatment?.price}%0A` +
        `• *Data:* ${italianDate}%0A` +
        `• *Orario:* ${selectedTime}%0A%0A` +
        `👤 *Cliente* %0A` +
        `• Nome: ${formData.name}%0A` +
        `• Telefono: ${formData.phone}`;

      const whatsappNumber = "393387010789";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(waUrl, "_blank");

      setBookingStep("success");
    } else {
      alert("Compila tutti i campi e seleziona giorno e orario.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      {bookingStep === "treatment" && (
        <>
          <h2 className="text-2xl font-bold mb-4">Scegli il trattamento</h2>
          <div className="space-y-4">
            {TREATMENTS.map((t) => (
              <div
                key={t.id}
                onClick={() => { setSelectedTreatment(t.id); setBookingStep("date"); }}
                className="p-4 border rounded-xl cursor-pointer hover:bg-gray-100 transition"
              >
                <h3 className="font-semibold">{t.name}</h3>
                <p>Durata: {t.duration}</p>
                <p className="font-bold mt-1">€{t.price}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {bookingStep === "date" && (
        <>
          <button className="mb-4 flex items-center" onClick={() => setBookingStep("treatment")}>
            <ArrowLeft className="mr-2" /> Indietro
          </button>

          <h2 className="text-2xl font-bold mb-4">Seleziona la data</h2>

          <input
            type="date"
            className="w-full border p-3 rounded-xl"
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
          />

          <button
            disabled={!selectedDate}
            onClick={() => selectedDate && setBookingStep("time")}
            className="mt-4 w-full bg-black text-white p-3 rounded-xl disabled:bg-gray-300"
          >
            Continua
          </button>
        </>
      )}

      {bookingStep === "time" && (
        <>
          <button className="mb-4 flex items-center" onClick={() => setBookingStep("date")}>
            <ArrowLeft className="mr-2" /> Indietro
          </button>

          <h2 className="text-2xl font-bold mb-4">Seleziona l'orario</h2>

          <div className="grid grid-cols-2 gap-3">
            {AVAILABLE_TIMES.map((time) => (
              <button
                key={time}
                onClick={() => { setSelectedTime(time); setBookingStep("form"); }}
                className="p-3 border rounded-xl hover:bg-gray-100"
              >
                {time}
              </button>
            ))}
          </div>
        </>
      )}

      {bookingStep === "form" && (
        <>
          <button className="mb-4 flex items-center" onClick={() => setBookingStep("time")}>
            <ArrowLeft className="mr-2" /> Indietro
          </button>

          <h2 className="text-2xl font-bold mb-4">Inserisci i tuoi dati</h2>

          <form onSubmit={handleBookingConfirm} className="space-y-4">

            <input
              type="text"
              placeholder="Nome e Cognome"
              className="w-full border p-3 rounded-xl"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <input
              type="tel"
              placeholder="Telefono"
              className="w-full border p-3 rounded-xl"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />

            <button className="w-full bg-green-600 text-white p-3 rounded-xl">
              Conferma Prenotazione
            </button>
          </form>
        </>
      )}

      {bookingStep === "success" && (
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold mb-3">Prenotazione inviata! 🎉</h2>
          <p>Ti risponderemo il prima possibile su WhatsApp.</p>

          <a
            href={createGoogleCalendarUrl()}
            target="_blank"
            className="mt-4 block bg-blue-600 text-white p-3 rounded-xl w-full"
          >
            📅 Aggiungi al Google Calendar
          </a>

          <button
            onClick={() => {
              setBookingStep("treatment");
              setSelectedDate(null);
              setSelectedTime(null);
              setFormData({ name: "", phone: "" });
            }}
            className="mt-6 bg-black text-white p-3 rounded-xl w-full"
          >
            Nuova Prenotazione
          </button>
        </div>
      )}

    </div>
  );
}
