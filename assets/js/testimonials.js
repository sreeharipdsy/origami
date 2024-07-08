
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const username = document.querySelector('.username');

const testimonials = [
  {
    name: '- Zahrah',
    text:
      "Your study plan was very useful. When I was struggling to know what to do, I saw your poster in the group... I was able to study with a timetable for 15 days. Discussing and learning was very useful. The point notes are really informative. Thank you!",
  },
  {
    name: '- Ansila',
    text:
      "First of all, I would like to thank your team. You are students like us, and yet, despite the exam pressure, you were able to bring us all together and make it happen. It was a well-structured plan. Very useful, with questions and discussions. We were all fully engaged in it. We didn't waste any time. Thank you so much, iam very happy!",
  },
  {
    name: '- Midlaj',
    text:
      "This is/was my first entrance coaching.. Worth it💯 Thanks for the team⁩ for ur sincere efforts.. u helped us a lot especially me to keep on my tracks in this last lap..",
  },
  {
    name: '- Dilna',
    text:
      "I had entrance coaching before this, but I must say, I've never attended anything as wholeheartedly as this. I feel that studying together with everyone was really great. Mainly, when it came to PYQs (previous year questions), our marks increased with each attempt. Overall, it was amazing. The classes were really good, not boring at all. Your effort is worth appreciating. It was very good, thank you!",
  },
  {
    name: '- Hilma',
    text:
      "Honestly, I’ve never been one to study regularly, but being part of this group changed everything for me. I had to tackle the questions, and in the process, I learned so much. There were times when my laziness got the best of me, and I felt like giving up on many things. However, the support and motivation from this group kept me going. I owe my newfound knowledge and progress entirely to this incredible group. Thank you so much, Team Origami, for making such a difference in my life!",
  },
];

let idx = 1;

function updateTestimonials() {
    const { name, text } = testimonials[idx];
    
    // Add fade-out class
    testimonial.classList.add('fade-out');
    username.classList.add('fade-out');

    setTimeout(() => {
        // Update text
        testimonial.innerHTML = text;
        username.innerHTML = name;

        // Remove fade-out class and add fade-in class
        testimonial.classList.add('fade-in');
        username.classList.add('fade-in');
        testimonial.classList.remove('fade-out');
        username.classList.remove('fade-out');

        // Remove fade-in class after animation completes
        setTimeout(() => {
            testimonial.classList.remove('fade-in');
            username.classList.remove('fade-in');
        }, 200);
    }, 200); // Match this duration with the CSS transition duration

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonials, 5000);
