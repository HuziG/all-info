function ActivityItem({ children, item: { post, user, forum } }: any) {
  return <div>
    <div className={'flex justify-between cursor-pointer '}>
      <div className={'flex'}>
        <img src={user.avatar_url} alt="error" className={'w-14 h-14 rounded-full'} />
        <div className={'flex flex-col justify-between ml-2'}>
          <p className={'text-base dark:text-main-title'}>{user.nickname}</p>
          <p className={'text-sm text-gray-500 dark:text-vice-title'}>{user.certification.label}</p>
        </div>
      </div>
      <div className={'flex items-center justify-center'}>
        <img src={forum.icon} alt="error" className={'w-6 h-6'} />
        <span className={'text-sm dark:text-main-title'}>{forum.name}</span>
      </div>
    </div>

    <div className={'text-xl font-bold my-3 dark:text-main-title cursor-pointer hover:underline'}>{post.subject}</div>

    <div className={'text-gray-800 text-base dark:text-vice-title'}>{post.content}</div>

    <div className={'mt-2 flex-wrap overflow-hidden'}>
      {post.images.map((url: string) => (
        <div className={'ml-1 mt-1 relative float-left'} style={{
          width: '32%',
          paddingBottom: '32%',
          height: 0,
        }}>
          <img
            src={url}
            alt='error'
            className={'rounded-md object-cover absolute w-full h-full'}
          />
        </div>
      ))}
    </div>

    {children}
  </div>
}

export default ActivityItem
