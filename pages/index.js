import React, { useEffect, useContext, useState } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";

const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allCampaign, setAllCampaign] = useState();
  const [userCampaign, setUserCampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const getUserCampaignsData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await getUserCampaignsData;
      setAllCampaign(allData);
      setUserCampaign(userData);
    };
  }, []);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  console.log(donateCampaign);
  return (
    <div>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card
        title="All Campaigns"
        allCampaign={allCampaign}
        setOpenPopUp={setOpenPopUp}
        setDonate={setDonateCampaign}
      />
      <Card
        title="Your Created Campaign"
        allCampaign={userCampaign}
        setOpenPopUp={setOpenPopUp}
        setDonate={setDonateCampaign}
      />
      {openPopUp && (
        <PopUp
          setOpenPopUp={setOpenPopUp}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </div>
  );
};

export default index;
