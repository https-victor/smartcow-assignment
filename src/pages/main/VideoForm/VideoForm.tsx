interface Props {
  mode: 'edit' | 'create';
}
export const VideoForm = ({ mode }: Props) => {
  return <div>{mode === 'edit' ? 'Edit' : 'Create'}</div>;
};
