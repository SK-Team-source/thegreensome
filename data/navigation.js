// Mirrors the original menu exactly: labels, order and destinations.
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/Company' },
  { label: 'Products', href: '/Products' },
  { label: 'Gallery', href: '/Gallery' },
  {
    label: 'Contact Us',
    href: '/Contact-Us',
    children: [{ label: 'Wholesale Enquiry', href: '/Contact-Us/Wholesale-Enquiry' }],
  },
  { label: 'Blog', href: '/Blog' },
];
