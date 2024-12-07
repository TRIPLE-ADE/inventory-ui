import React from "react";

import { CardTitle } from "../ui/card";

const Title = ({ title }: { title: string }) => {
  return <CardTitle className="text-primary">{title}</CardTitle>;
};

export default Title;
