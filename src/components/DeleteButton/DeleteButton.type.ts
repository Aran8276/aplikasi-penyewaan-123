export interface DeleteButtonProps {
  id: number;
  loading: boolean;
  action: (id: number) => void;
}
