'use client'

import {ActionIcon, TextInput} from '@mantine/core';
import {useState} from 'react';
import {Task} from '@/types/task';
import {TaskCard} from '@/app/components/TaskCard';
import { v4 as uuid } from 'uuid';

export default function List(){
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<Task[]>([{description: 'example1', id: 'hello555'},{description: 'example2', id: 'uniqueid23123'}]);

    function resetInput(){
        setInputValue('');
    }
    function addTask() {
        const newTask: Task = {
            description: inputValue,
            id: uuid(),
        }

        setTasks(tasks.concat(newTask));
        resetInput();
    }

    function deleteTask(taskId: string) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    return(
        <div>
            <TextInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                size="md"
                description="Add a task to your list"
                placeholder="What do you want to do?"
                label="Add task"
                rightSection={
                    <ActionIcon onClick={addTask}>+</ActionIcon>
                }/>
            <div style={{marginTop: '40px'}}>
                {tasks.map((t) => <TaskCard task={t}  key={t.id} deleteTask={deleteTask}/>)}
            </div>
        </div>
    )
}
