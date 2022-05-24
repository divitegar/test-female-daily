import React from "react";
import GroupCard from "../Card/GroupCard";
import HeaderCard from "../Molecules/HeaderCard";

export default function PopularGroup() {
  const dataProfile = [
    "https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/groups/image/fdn_comm_skincare_newbies.png",
    "https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/groups/image/fdn_comm_acne_warrior.png",
    "https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/groups/image/fdn_comm_combo.png",
    "https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/fdn-talk/groups/image/fdn_comm_no_bad_hair_day.png",
  ];
  return (
    <div className="container-header">
      <HeaderCard
        title="Popular Groups"
        subtitle="Where the beauty TALK are"
        link="#"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-10">
        {dataProfile.map((item, index) => {
          return <GroupCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
