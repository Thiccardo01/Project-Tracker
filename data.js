// data.js
// This file holds your project data.
// You can edit this directly on GitHub.com to update your tracker!

const projectData = [
    { id: 'p1', company: 'Client X', name: 'Character Design', stage: 'Concept', assigned: ['Leo', 'Mia'], eta: '2023-10-30', progress: 80, status: 'active' },
    { id: 'p2', company: 'Client Y', name: 'Environment Sketch', stage: 'Concept', assigned: ['Ethan'], eta: '2023-11-05', progress: 60, status: 'active' },
    { id: 'p3', company: 'Zento', name: 'Animatic Preview', stage: 'Storyboard', assigned: ['Sarah', 'David'], eta: '2023-10-28', progress: 90, status: 'active' },
    { id: 'p4', company: 'PixelFoundry', name: 'Scene Layout', stage: 'Storyboard', assigned: ['Emily'], eta: '2023-11-02', progress: 75, status: 'active' },
    { id: 'p5', company: 'VeraFX', name: 'Asset Modeling', stage: 'Work in Progress', assigned: ['Leo', 'Emily'], eta: '2023-11-15', progress: 45, status: 'active' },
    { id: 'p6', company: 'Zento', name: 'Rigging & Animation', stage: 'Work in Progress', assigned: ['David'], eta: '2023-11-20', progress: 20, status: 'active' },
    { id: 'p7', company: 'Client X', name: 'Concept Revisions', stage: 'Feedback', assigned: ['Mia'], eta: '2023-10-25', progress: 100, status: 'closed' },
    { id: 'p8', company: 'PixelFoundry', name: 'Animatic Notes', stage: 'Feedback', assigned: ['Sarah'], eta: '2023-10-27', progress: 100, status: 'closed' },
    { id: 'p9', company: 'Zento', name: 'Project A Teaser', stage: 'Concept', assigned: ['Ethan', 'Mia'], eta: '2023-12-01', progress: 30, status: 'active' },
    { id: 'p10', company: 'PixelFoundry', name: 'Project B Promo', stage: 'Work in Progress', assigned: ['Leo', 'David'], eta: '2023-12-10', progress: 50, status: 'active' },
    { id: 'p11', company: 'VeraFX', name: 'Project C Final Render', stage: 'Feedback', assigned: ['Emily'], eta: '2023-11-01', progress: 100, status: 'closed' },
    // Add new projects here! Remember to give each a unique 'id'.
    // Example of a new project:
    // { id: 'p12', company: 'New Client', name: 'Product Visualization', stage: 'Concept', assigned: ['Alice'], eta: '2024-01-15', progress: 10, status: 'active' },
];

// Define the stages for your columns. These should match the 'stage' property in your projectData.
const stages = ['Concept', 'Storyboard', 'Work in Progress', 'Feedback', 'Closed'];