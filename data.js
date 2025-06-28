// data.js
// This file holds your project data.
// You can edit this directly on GitHub.com to update your tracker!
const projectData = [
    { id: 'p1', company: 'MPP', name: 'Travel CGI Video', stage: 'Feedback', assigned: ['Shrey', 'Nimesh'], eta: '2024-07-01', progress: 90, status: 'active' },
    { id: 'p2', company: 'MPP', name: 'Monsoon 3d Video', stage: 'Storyboard', assigned: ['Nimish', 'Raza'], eta: '2024-06-27', progress: 10, status: 'active' },
    { id: 'p3', company: 'MPP', name: 'Pokochan Birthday', stage: 'Work in Progress', assigned: ['Raza', 'Vignesh', 'Sumit'], eta: '2024-07-02', progress: 70, status: 'active' },
    { id: 'p4', company: 'Dabur', name: 'Gulbari CGI video', stage: 'Feedback', assigned: ['Nimish', 'Raza'], eta: '2024-06-27', progress: 90, status: 'active' },
    { id: 'p5', company: 'Vital', name: 'Sandy Beach - Static', stage: 'Closed', assigned: ['Vignesh'], eta: '2024-06-26', progress: 100, status: 'closed' },
    { id: 'p6', company: 'Vital', name: 'Football Hydration - Static', stage: 'Work in Progress', assigned: ['Sumit'], eta: '2024-06-30', progress: 45, status: 'active' },
    { id: 'p7', company: 'Vital', name: 'New Launch - Static', stage: 'Work in Progress', assigned: ['Sumit'], eta: '2024-06-30', progress: 40, status: 'active' },
    { id: 'p8', company: 'Vital', name: 'Crush D - Recycle - Static', stage: 'Concept', assigned: ['Sumit', 'Nimish'], eta: '2024-07-02', progress: 20, status: 'active' },
    { id: 'p9', company: 'Vital', name: 'Citrus Reveal - CGI Video', stage: 'Concept', assigned: ['Raza'], eta: '2024-07-04', progress: 15, status: 'active' },
    { id: 'p10', company: 'Vital', name: 'Vital riding the waves - CGI Video', stage: 'Concept', assigned: ['Nimish'], eta: '2024-07-03', progress: 10, status: 'active' },
    { id: 'p11', company: 'Bikano', name: 'Bikano around the world creative', stage: 'Work in Progress', assigned: ['Sumit'], eta: '2024-06-27', progress: 55, status: 'active' },
    { id: 'p12', company: 'Vibhor', name: '3d model development', stage: 'Work in Progress', assigned: ['Shrey', 'Nimish'], eta: '2024-06-02', progress: 30, status: 'active' },
    { id: 'p13', company: 'Ancestar', name: '4 3d Videos Skin', stage: 'Feedback', assigned: ['Shrey', 'Nimish'], eta: '2024-06-27', progress: 95, status: 'active' },
    { id: 'p14', company: 'Safco', name: 'Safco CGI videos Building #1', stage: 'Concept', assigned: ['Nimish'], eta: '2024-06-25', progress: 25, status: 'active' },
    { id: 'p15', company: 'Safco', name: 'Safco CGI videos Building #2', stage: 'Concept', assigned: ['Nimish'], eta: '2024-06-25', progress: 25, status: 'active' },
    { id: 'p16', company: 'Munafa', name: 'AI Video Generation', stage: 'Work in Progress', assigned: ['Krithik', 'Kuleen'], eta: '2024-06-12', progress: 80, status: 'active' },
    { id: 'p17', company: 'manfor', name: 'Myra intro video', stage: 'Work in Progress', assigned: ['Ally'], eta: '2024-06-27', progress: 75, status: 'active' },
    // Add new projects here! Remember to give each a unique 'id'.
    // Example of a new project:
    // { id: 'p18', company: 'New Client', name: 'Product Visualization', stage: 'Concept', assigned: ['TeamMember'], eta: '2024-08-15', progress: 10, status: 'active' },
];

// Define the stages for your columns. These should match the 'stage' property in your projectData.
const stages = ['Concept', 'Storyboard', 'Work in Progress', 'Feedback', 'Closed'];

// Export the data for use in your tracking system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectData, stages };
}
