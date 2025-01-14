import AuthButton from '@/components/AuthButton'

export default async function Index() {
  return (
    <div className='flex w-full flex-1 flex-col items-center gap-20'>
      <div className='flex w-full max-w-4xl items-center justify-between p-3 text-sm'>
        <AuthButton />
      </div>
    </div>
  )
}
