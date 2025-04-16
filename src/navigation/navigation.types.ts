type RootStackParamList = {
    Dashboard: undefined;
    UserDetails: { userId: number };
  };

type DashboardTabParamList = {
    Home: undefined;
    Settings: undefined;
  };

export type { RootStackParamList, DashboardTabParamList };
