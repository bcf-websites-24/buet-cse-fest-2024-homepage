import Image from "next/image";

export const SponsorCard = ({ sponsor }) => {
  return (
    <div className="border p-4 rounded-xl text-center w-72 flex flex-col items--center justify-between">
      <Image
        width="400"
        height="400"
        className="w-full object-contain roundde-xl"
        src={sponsor.logo}
        alt={sponsor.name}
      />
      <div className="">
        <h3 className="text-xl font-semibold mt-4 mb-2">{sponsor.name}</h3>
        <p className="test-xs text-slate-400">{sponsor.status}</p>
      </div>
    </div>
  );
};
