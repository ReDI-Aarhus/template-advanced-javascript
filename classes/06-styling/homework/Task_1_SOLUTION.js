import React from "react";
import styles from "./UserCardSolution.module.css";

export const UserCard = ({ name, email, bio, avatar }) => {
  const inlineStyles = {
    image: {
      width: "80px",
      borderRadius: "50%",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#f0f4f8",
      borderRadius: "10px",
      width: "250px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={inlineStyles.container}>
      <img src={avatar} alt={name} style={inlineStyles.image} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>{email}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};