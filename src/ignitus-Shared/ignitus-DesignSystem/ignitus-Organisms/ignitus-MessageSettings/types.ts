export type Props = {
  anyone: boolean;
  connections: boolean;
  directConnections: boolean;
  setAnyone: React.Dispatch<React.SetStateAction<boolean>>;
  setConnections: React.Dispatch<React.SetStateAction<boolean>>;
  setDirectConnections: React.Dispatch<React.SetStateAction<boolean>>;
};
