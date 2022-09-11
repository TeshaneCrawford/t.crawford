import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import NextLink from "next/link";
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";

import {darkTheme} from "../../shared/theme/index";
import { AcmeLogo } from "./AcmeLogo.js";

import {  ThemeToggle } from '../../components'


export interface Props {
    // routes?: Route[];
    hasNotify?: boolean;
    isHome?: boolean;
  }

const Navigation:  React.FC<Props> = ({}) => {
    // const router = useRouter();
  const collapseItems = [
    "Services",
    "Projects",
    "About",
    "Contact",
    "Blog",
    "Resume",
  ];

  return (
      <Navbar isBordered variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            TJC
          </Text>
          <ThemeToggle
                  className="navbar__social-icon"
                  css={{
                    m: "0 6px",
                    "& svg": {
                      transition: "$default",
                    },
                    "&:hover": {
                      "& svg": {
                        opacity: 0.7,
                      },
                    },
                  }}
                />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link isActive href="#">
            Projects
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Contact me at
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  crawfordteshane@gmail.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                Services
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Projects</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Blog
              </Dropdown.Item>
              <Dropdown.Item key="system">About</Dropdown.Item>
              <Dropdown.Item key="configurations">Contact</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Resume
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 1}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
  );
}
export default Navigation;