export type Step = {
  step: string;
  title: string;
  body: string;
};

export const howItWorks: Step[] = [
  {
    step: '01',
    title: 'Consultation',
    body: 'We visit the space, understand how you live in it, and talk through what you want to change. Free, no obligation.',
  },
  {
    step: '02',
    title: 'Design & Quote',
    body: 'A layout, material palette, and a line-item quote — so you know exactly what you are paying for before anything is confirmed.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'Wardrobes, kitchens and joinery come out of our own factory. On-site work is scheduled and supervised end to end.',
  },
  {
    step: '04',
    title: 'Handover',
    body: 'A final walkthrough together, snag list closed out, before we call it done.',
  },
];
