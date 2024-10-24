import { teams } from "./Data";

const OurTeam = () => {

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600">{member.name}</h3>
                <p className="text-blue-500 text-lg mb-2">{member.position}</p>
                {/* <p className="text-gray-700">{member.bio}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
