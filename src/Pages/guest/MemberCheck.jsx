import React, { useEffect, useState } from "react";
import membersData from "../../data/members.json";

const MemberCheck = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers(membersData);
  }, []);

  return (
    <div>
      <h2>Member Status</h2>
      <div className="member-list">
        {members.map((member) => (
          <div key={member.id} className="member-item">
            <h4>{member.name}</h4>
            <p>Status: {member.membership_status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberCheck;
