import {ActionIcon, Card} from '@mantine/core';
import {Task} from '@/types/task';
import classes from '@/style/components/task.module.scss'

interface TaskCardProps {
    task: Task;
    deleteTask: (taskId: string) => void,
}

export function TaskCard({task, deleteTask} : TaskCardProps) {
    return(
        <Card className={classes.taskCard} my='sm' withBorder>
            {task.description}
            <ActionIcon className={classes.deleteIcon} onClick={() => deleteTask(task.id)}>x</ActionIcon>
        </Card>
    )
}
