const WHATSAPP_NUMBER = '917838626565';

export function openWhatsApp(message: string) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

export function buildBookingMessage(params: {
  service?: string;
  vehicle?: string;
  destination?: string;
  date?: string;
  passengers?: string;
  name?: string;
  phone?: string;
}) {
  const lines = ['Hi Guruji Tour & Travels!'];
  if (params.service) lines.push(`Service: ${params.service}`);
  if (params.vehicle) lines.push(`Vehicle: ${params.vehicle}`);
  if (params.destination) lines.push(`Destination: ${params.destination}`);
  if (params.date) lines.push(`Date: ${params.date}`);
  if (params.passengers) lines.push(`Passengers: ${params.passengers}`);
  if (params.name) lines.push(`Name: ${params.name}`);
  if (params.phone) lines.push(`Phone: ${params.phone}`);
  lines.push('\nPlease share details and availability. Thank you!');
  return lines.join('\n');
}

export function buildEnquiryMessage(params: {
  name: string;
  phone: string;
  service?: string;
  message?: string;
}) {
  const lines = [
    'Hi Guruji Tour & Travels!',
    `Name: ${params.name}`,
    `Phone: ${params.phone}`,
  ];
  if (params.service) lines.push(`Interested in: ${params.service}`);
  if (params.message) lines.push(`Message: ${params.message}`);
  lines.push('\nPlease get back to me. Thank you!');
  return lines.join('\n');
}
