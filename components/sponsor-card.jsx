import Image from "next/image";

export const SponsorCard = ({ sponsor }) => {
  return (
    <div className="border p-4 rounded-xl text-center w-48 flex flex-col items--center justify-between">
      <div className="flex-1 center ">
        <Image
          width="400"
          height="400"
          className="w-full object-contain rounded-xl"
          src={sponsor.logo}
          alt={sponsor.name}
        />
      </div>
      <div className="mt-4">
        {/* <h3 className="text-xl font-semibold mt-4 mb-2">{sponsor.name}</h3> */}
        <p className="text-xs text-slate-400">{sponsor.status}</p>
      </div>
    </div>
  );
};
