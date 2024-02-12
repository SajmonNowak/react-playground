import {Card, Tabs} from '@mantine/core';
import {usePathname, useRouter} from 'next/navigation';

const navItems = [
    { name: 'list', route: '/list', label: 'To-do List' },
    { name: 'trello  ', route:'/trello', label: 'Trello Board' },
]

export default function SideNav() {

    const pathname = usePathname();
    const router = useRouter();

    return (
    <Card padding="0" shadow="lg" radius="md"  >
        <Tabs
            orientation="vertical"
            value={pathname}
            onChange={(v) => router.push(`${v}`)}
        >
            <Tabs.List>
                {navItems.map(n     =>
                    (<Tabs.Tab value={n.route} key={n.name} p="lg"> {n.label}</Tabs.Tab>))
                }
            </Tabs.List>
        </Tabs>
    </Card>
    )
}
