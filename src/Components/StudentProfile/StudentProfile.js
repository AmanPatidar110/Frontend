import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import KeyPair from "../KeyPair/KeyPair";
import Page from "../Page/Page";
import { useProfile } from "./StudentProfile.hooks";

function StudentProfile() {
  const { data } = useProfile();
  const linkStack = useHistory();
  const [isEditMode, setIsEditMode] = useState(true);
  console.log(data);
  return (
    <Page
      heading={"Profile"}
      actionText="Edit Profile"
      onAction={() => linkStack.push("/student/edit-profile")}
    >
      <Card>
        <KeyPair label="Phone Number" value={data?.phoneNo} />
      </Card>
    </Page>
  );
}

export default StudentProfile;
