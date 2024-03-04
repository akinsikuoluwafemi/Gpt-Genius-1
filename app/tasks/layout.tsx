interface TaskLayoutProps {
  children: React.ReactNode;
}

const TaskLayout = ({ children }: Readonly<TaskLayoutProps>) => {
  return <div>{children}</div>;
};

export default TaskLayout;
