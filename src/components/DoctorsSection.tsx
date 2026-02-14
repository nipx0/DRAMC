
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const doctors = [
  {
    name: "Dr. Ahmed Alkhawajah",
    specialty: "Cardiology",
    qualifications: "MD, FACC",
    bio: "Dr. Ahmed Alkhawajah is a leading cardiologist with over 20 years of experience. He is a fellow of the American College of Cardiology and has published numerous research papers in the field of cardiology.",
    image: "/assets/doctor1.jpg",
  },
  {
    name: "Dr. Fatimah Al-Abdullah",
    specialty: "Pediatrics",
    qualifications: "MD, FAAP",
    bio: "Dr. Fatimah Al-Abdullah is a board-certified pediatrician with a passion for providing comprehensive care to children of all ages. She is a fellow of the American Academy of Pediatrics.",
    image: "/assets/doctor2.jpg",
  },
  {
    name: "Dr. Yousef Al-Othman",
    specialty: "Neurology",
    qualifications: "MD, FAAN",
    bio: "Dr. Yousef Al-Othman is a neurologist who specializes in the diagnosis and treatment of disorders of the nervous system. He is a fellow of the American Academy of Neurology.",
    image: "/assets/doctor3.jpg",
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">
          Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.name}>
              <CardHeader>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{doctor.name}</CardTitle>
                <p className="text-lg text-gray-700">{doctor.specialty}</p>
                <p className="text-gray-600">{doctor.qualifications}</p>
                <p className="mt-4">{doctor.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
