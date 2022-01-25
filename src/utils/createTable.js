import Mock from "mockjs"
export const columns = [
    {
        key: "index",
        type: "number",
        width: 80,
        fixed: 'left'
    },
    {
        key: "id",
        type: "guid",
        width: 160
    },
    {
        key: "name",
        type: "name",
        width: 300
    },
    {
        key: "url",
        type: "url",
        fixed: 'right'
    },
]

const mockTemplate = Object.fromEntries(columns.map(({ key, type }) => [key, `@${type}`]))

export function createData(total = 5) {
    return Array.from(new Array(total)).map((key, index) => {
        return {
            ...Mock.mock(mockTemplate),
            index
        }
    })
}