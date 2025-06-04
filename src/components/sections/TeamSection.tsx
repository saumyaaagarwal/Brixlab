import React from 'react';
import teamMember1 from '../../assets/team/team_1.jpg'; // 600x500
import teamMember2 from '../../assets/team/team_2.jpg'; // 400x350
import teamMember3 from '../../assets/team/team_3.jpg'; // 200x400
import teamMember5 from '../../assets/team/team_5.jpg'; // 800x600
import teamMember7 from '../../assets/team/team_7.jpg'; // 200x400
 
const TeamSection: React.FC = () => {
  return (
<section id="team" className="py-20 bg-gray-50">
<div className="container mx-auto px-4 md:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Meet Our Team
</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team of professionals dedicated to delivering exceptional results
</p>
</div>
 
        {/* Adjusted container aspect ratio to better fit image proportions */}
<div className="relative aspect-[5/3] bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Large box - CEO/Founder (600x500) - Top left */}
<div className="absolute top-0 left-0 w-[60%] h-[62.5%] group">
<div className="w-full h-full relative overflow-hidden">
<img
                src={teamMember1}
                alt="CEO/Founder"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">

</div>
</div>
</div>
 
          {/* Medium box top right (400x350) - Marketing Director */}
<div className="absolute top-0 right-0 w-[40%] h-[43.75%] group">
<div className="w-full h-full relative overflow-hidden">
<img
                src={teamMember2}
                alt="Marketing Director"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">

</div>
</div>
</div>
 
          {/* Medium box middle right (200x400) - Creative Director */}
<div className="absolute top-[43.75%] right-[20%] w-[20%] h-[56.5%] group">
<div className="w-full h-full relative overflow-hidden">
<img
                src={teamMember3}
                alt="Creative Director"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">




</div>
</div>
</div>
 
          {/* Square stats box (1:1) - Bottom left */}
<div className="absolute bottom-0 left-0 w-[20%] h-[38%]">
<div className="w-full h-full bg-black flex items-center justify-center">
<div className="text-center p-4">
<div className="text-accent text-5xl font-bold">20+</div>
<div className="text-white text-sm">Creative</div>
<div className="text-white text-sm">Minds</div>
</div>
</div>
</div>
 
          {/* Large bottom box (800x600) - Lead Designer */}
<div className="absolute bottom-0 left-[20%] w-[40%] h-[37.5%] group">
<div className="w-full h-full relative overflow-hidden">
<img
                src={teamMember5}
                alt="Lead Designer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">

</div>
</div>
</div>
 
          {/* Tall narrow box (200x400) - Frontend Developer */}
<div className="absolute bottom-0 right-0 w-[20%] h-[56.5%] group">
<div className="w-full h-full relative overflow-hidden">
<img
                src={teamMember7}
                alt="Frontend Developer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">

</div>
</div>
</div>
</div>
</div>
</section>
  );
};
 
export default TeamSection;