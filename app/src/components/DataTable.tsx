import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

interface Column<T> {
  key: string;
  title: string;
  render?: (record: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
  };
  emptyText?: string;
}

export default function DataTable<T extends { id: string }>({
  columns,
  data,
  pagination,
  emptyText = '暂无数据',
}: DataTableProps<T>) {
  const totalPages = pagination
    ? Math.ceil(pagination.total / pagination.pageSize)
    : 1;

  return (
    <div>
      <div className="border border-[#f0f0f0] rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-[#fafafa]">
            <TableRow className="hover:bg-transparent">
              {columns.map((col) => (
                <TableHead
                  key={col.key}
                  className="text-[#666] font-medium text-sm py-3 px-4"
                >
                  {col.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-center py-16 text-[#999]"
                >
                  {emptyText}
                </TableCell>
              </TableRow>
            ) : (
              data.map((record, index) => (
                <TableRow
                  key={record.id}
                  className={index % 2 === 1 ? 'bg-[#fafafa]' : ''}
                >
                  {columns.map((col) => (
                    <TableCell key={col.key} className="py-3 px-4 text-sm">
                      {col.render
                        ? col.render(record)
                        : (record as Record<string, unknown>)[col.key] as string}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {pagination && (
        <div className="flex items-center justify-end gap-4 mt-4">
          <span className="text-sm text-[#666]">
            共 {pagination.total} 条
          </span>
          <Select
            value={String(pagination.pageSize)}
            onValueChange={(value) =>
              pagination.onPageSizeChange?.(Number(value))
            }
          >
            <SelectTrigger className="w-[100px] h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10条/页</SelectItem>
              <SelectItem value="20">20条/页</SelectItem>
              <SelectItem value="30">30条/页</SelectItem>
              <SelectItem value="50">50条/页</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            disabled={pagination.current <= 1}
            onClick={() => pagination.onChange(pagination.current - 1)}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm">
            <span className="text-[#F56C4A] font-medium">
              {pagination.current}
            </span>
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            disabled={pagination.current >= totalPages}
            onClick={() => pagination.onChange(pagination.current + 1)}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          <span className="text-sm text-[#666]">前往</span>
          <Input
            type="number"
            className="w-14 h-8 text-center"
            min={1}
            max={totalPages}
            defaultValue={pagination.current}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const page = Number((e.target as HTMLInputElement).value);
                if (page >= 1 && page <= totalPages) {
                  pagination.onChange(page);
                }
              }
            }}
          />
          <span className="text-sm text-[#666]">页</span>
        </div>
      )}
    </div>
  );
}
