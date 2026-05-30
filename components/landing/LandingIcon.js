"use client";

import {
  AimOutlined,
  BankOutlined,
  BarChartOutlined,
  BookOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  FileSearchOutlined,
  MessageOutlined,
  PlayCircleOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  SolutionOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const icons = {
  aim: AimOutlined,
  bank: BankOutlined,
  barChart: BarChartOutlined,
  book: BookOutlined,
  calendar: CalendarOutlined,
  check: CheckCircleOutlined,
  clock: ClockCircleOutlined,
  fileSearch: FileSearchOutlined,
  message: MessageOutlined,
  play: PlayCircleOutlined,
  read: ReadOutlined,
  safety: SafetyCertificateOutlined,
  solution: SolutionOutlined,
  team: TeamOutlined,
  trophy: TrophyOutlined,
};

export default function LandingIcon({ name = "check", className = "" }) {
  const Icon = icons[name] || CheckCircleOutlined;

  return <Icon aria-hidden="true" className={className} />;
}
