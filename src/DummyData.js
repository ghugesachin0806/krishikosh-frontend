import { Bell, Database, Palette, Shield, User } from "lucide-react";

export const totalExpenses = 90;
export const totalRevenue = 190;
export const netProfit = 100;

export const COLORS = ["#2d5a27", "#4a7c59", "#7fb069", "#8b4513", "#d2b48c"];

export const settingTabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "preferences", label: "Preferences", icon: Palette },
  { id: "security", label: "Security", icon: Shield },
  { id: "data", label: "Data Management", icon: Database },
];

export const notificationSettings = [
  {
    id: "emailNotifications",
    title: "Email Notifications",
    subtitle: "Receive important updates via email"
  },
  {
    id: "smsNotifications",
    title: "SMS Notifications",
    subtitle: "Get urgent alerts via SMS"
  },
  {
    id: "pushNotifications",
    title: "Push Notifications",
    subtitle: "Receive in-app notifications"
  },
  {
    id: "cropReminders",
    title: "Crop Reminders",
    subtitle: "Get reminders for crop-related tasks"
  },
  {
    id: "weatherAlerts",
    title: "Weather Alerts",
    subtitle: "Receive weather-related alerts"
  },
  {
    id: "marketUpdates",
    title: "Market Updates",
    subtitle: "Get crop price and market updates"
  },
  {
    id: "expenseReminders",
    title: "Expense Reminders",
    subtitle: "Reminders for expense tracking"
  }
];


export const cropFilterList = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Profitale",
    value: "profitable",
  },
  {
    name: "Loss-Making",
    value: "lossMaking",
  },
];

export const cropData = [
  {
    id: 1,
    name: "Wheat",
    area: 20,
    totalExpenses: 50000,
    totalRevenue: 90000,
    profit: 40000,
  },
  {
    id: 2,
    name: "Rice",
    area: 15,
    totalExpenses: 60000,
    totalRevenue: 110000,
    profit: 50000,
  },
  {
    id: 3,
    name: "Corn",
    area: 10,
    totalExpenses: 30000,
    totalRevenue: 55000,
    profit: 25000,
  },
  {
    id: 4,
    name: "Sugarcane",
    area: 25,
    totalExpenses: 80000,
    totalRevenue: 130000,
    profit: 50000,
  },
  {
    id: 5,
    name: "Cotton",
    area: 18,
    totalExpenses: 45000,
    totalRevenue: 70000,
    profit: 25000,
  },
];

export const expenseFilterList = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Land Preparation",
    value: "landPreparation",
  },
  {
    name: "Seed and Sowing",
    value: "seedAndSowing",
  },
  {
    name: "Nutrient and Water",
    value: "nutrientAndWater",
  },
  {
    name: "Pest and Weed",
    value: "pestAndWeed",
  },
  {
    name: "Harvesting",
    value: "harvesting",
  },
  {
    name: "Post-Harvest",
    value: "postHarvest",
  },
  {
    name: "Other",
    value: "other",
  },
];
