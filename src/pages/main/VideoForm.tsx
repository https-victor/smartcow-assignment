export const VideoForm = ({ mode }: any) => {
  return <div>{mode === 'edit' ? 'Edit' : 'Create'}</div>;
};
