"use client";
/* It has to be in separate file with 'use client' directive, cause we are using theme here
  and theme runs on the browser
  if we use 'use client' in page, we wont be able to do server side rendering
*/

import { Title } from "@/components/title";
import withTheme from "@/theme";
import { Button } from "antd";

type Props = {
  txt: string;
};

function SSR({ txt }: Props) {
  return (
    <section
      style={{
        textAlign: "center",
        marginTop: 48,
        marginBottom: 40,
        padding: 100,
      }}
    >
      <Button type="primary">{txt}</Button>
      <Title>{txt}</Title>
    </section>
  );
}

const SSRContent = ({ txt }: Props) => {
  return withTheme(<SSR txt={txt} />);
};

export default SSRContent;
