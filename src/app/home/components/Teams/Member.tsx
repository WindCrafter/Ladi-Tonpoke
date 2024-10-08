import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar } from "antd";
import { position } from "styled-system";

const Wrapper = styled.div`
  display: flex;
  padding: 32px 24px;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  width: 100%;
  min-height: 420px;

  border-radius: 40px;
  background: var(--White, #fff);
  box-shadow: 0px 16px 32px 0px rgba(101, 110, 126, 0.15);

  .description {
    color: var(--Neutral-Neutral-300, #8f9ab8);
    text-align: center;
    margin-top: 8px;

    font-family: var(--font-readex-pro);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  .name {
    color: var(--Neutral-Neutral-500, #404c6b);
    text-align: center;

    font-family: var(--font-readex-pro);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-top: 16px;
  }

  .position {
    color: var(--Neutral-Neutral-300, #70788d);
    text-align: center;

    font-family: var(--font-readex-pro);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  .show-more {
    font-family: var(--font-readex-pro);
    color: var(--Primary, #0070f3);
    cursor: pointer;
    margin-top: 8px;
    font-size: 14px;
  }

  .link-social-user {
    margin-top: 6px;
  }
`;

interface MemberProps {
  image: string;
  name: string;
  description: string;
  position: string;
  linkedin?: string;
}

const Member: React.FC<MemberProps> = ({
  name,
  description,
  image,
  position,
  linkedin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <Wrapper>
      <Avatar
        size={120}
        icon={
          <Image
            className=""
            src={image}
            width={120}
            height={120}
            alt=""
            quality={100}
          />
        }
      />

      <p className="name">{name}</p>
      <p className="position">{position}</p>

      {linkedin && (
        <Link
          href={linkedin}
          className="link-social-user hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/social/linkedin.webp"
            width={40}
            height={40}
            alt=""
            quality={100}
          />
        </Link>
      )}

      <motion.div
        className="description"
        initial={{ height: 100 }}
        animate={{ height: isExpanded ? "auto" : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ overflow: "hidden" }}
      >
        {description}
      </motion.div>
      {description.length > 100 && (
        <span className="show-more" onClick={toggleExpanded}>
          {isExpanded ? "Show Less" : "Show More"}
        </span>
      )}
    </Wrapper>
  );
};

export default Member;
