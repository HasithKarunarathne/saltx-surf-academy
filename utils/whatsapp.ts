export const buildWhatsAppLink = (title: string, price: string) => {
  const whatsappNumber = (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "94785316101"
  ).replace(/\D/g, "");
  
  const message = `Hi Saltx Surf Academy, I'd like to book the ${title} package (${price}).`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
