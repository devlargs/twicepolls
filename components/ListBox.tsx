import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import generateSlug from "utils/generateUrlSlug";

type Props = {
  w: string | number;
  h: string | number;
  m: string | number;
  p: string | number;
  text: string;
  id: string;
};

const ListBox = ({ w, h, m, p, text, id }: Props) => {
  return (
    <Link href={`/lists/${generateSlug(text, id)}`}>
      <Box
        cursor="pointer"
        w={w}
        h={h}
        bg="primary.500"
        color="color.light"
        m={m}
        p={p}
        borderTopLeftRadius={23}
        borderBottomRightRadius={23}
        borderTopRightRadius={7}
        borderBottomLeftRadius={7}
      >
        <Text fontSize="20px">{text}</Text>
      </Box>
    </Link>
  );
};

export default ListBox;
