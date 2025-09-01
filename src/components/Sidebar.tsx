import { NavLink as RouterNavLink } from "react-router-dom";
import {
  NavLink,
  Stack,
  Box,
  Avatar,
  Indicator,
  Text,
  Group,
} from "@mantine/core";
interface SidebarComponentProps  {
  userName: string;
  type?: "admin" |"student";
}

export default function Sidebar(props: SidebarComponentProps) {
  const { userName, type } = props;
  return (

    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink
          color="cyan"
          label="Home"
          component={RouterNavLink}
          to="/"
          active
        />
        <NavLink
          color="cyan"
          label="About"
          component={RouterNavLink}
          to="/about"
        />
        {/* ตัวอย่าง ใช้ Navlink กับ  components อื่นๆ ของ mantine */}
        {/* <Text component={RouterNavLink} to="/">
          Test
        </Text> */}
      </Box>
      {/* แสดงผู้ใช้งาน */}

      <Box p={10}>
        <Group gap="sm">
          <Indicator inline size={10} offset={7} position="bottom-end" color="blue" withBorder>
            <Avatar
              size="md"
              radius="xl"
              src="IMG_FILM.jpeg"
            />
          </Indicator>
          <Text>
                User: {userName} : {type}
            </Text>
        </Group>
      </Box>
    </Stack>
  );
}
