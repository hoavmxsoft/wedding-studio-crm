
import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { mockTasks, mockStaff } from '../../data/mockData';
import type { Task, TaskStatus } from '../../types/types';

const KanbanColumn: React.FC<{ title: TaskStatus; tasks: Task[] }> = ({ title, tasks }) => {
    const statusColorMap = {
        'Todo': 'bg-blue-100',
        'In progress': 'bg-yellow-100',
        'Done': 'bg-green-100',
    };

    const getPriorityBadgeColor = (priority: 'Cao' | 'Trung bình' | 'Thấp') => {
        if (priority === 'Cao') return 'red';
        if (priority === 'Trung bình') return 'yellow';
        return 'green';
    }

    return (
        <div className={`flex-1 p-3 rounded-lg ${statusColorMap[title]}`}>
            <h3 className="font-semibold mb-3 text-gray-700">{title} ({tasks.length})</h3>
            <div className="space-y-3">
                {tasks.map(task => (
                    <Card key={task.id} className="bg-white">
                        <p className="font-semibold text-sm mb-2">{task.title}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{new Date(task.deadline).toLocaleDateString('vi-VN')}</span>
                            <Badge color={getPriorityBadgeColor(task.priority)} size="sm">{task.priority}</Badge>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

const TasksPage: React.FC = () => {
    const tasksByStatus = {
        'Todo': mockTasks.filter(t => t.status === 'Todo'),
        'In progress': mockTasks.filter(t => t.status === 'In progress'),
        'Done': mockTasks.filter(t => t.status === 'Done'),
    };

    return (
        <PageContainer title="Việc cần làm" breadcrumb={['Dashboard', 'Việc cần làm']}>
            <Card title="Kanban View">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <KanbanColumn title="Todo" tasks={tasksByStatus['Todo']} />
                    <KanbanColumn title="In progress" tasks={tasksByStatus['In progress']} />
                    <KanbanColumn title="Done" tasks={tasksByStatus['Done']} />
                </div>
            </Card>
        </PageContainer>
    );
};

export default TasksPage;
