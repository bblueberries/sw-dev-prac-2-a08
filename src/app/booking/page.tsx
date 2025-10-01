import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Venue Booking
      </h1>
      <BookingForm />
    </main>
  );
}
