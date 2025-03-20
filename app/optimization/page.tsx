import BlurImage from '@components/atoms/BlurImage';
import { createClient } from '@utils/supabase/server';

export async function getImages() {
  const supabase = await createClient();
  let { data: clubs } = await supabase
  .from('clubs')
  .select('*');
  return clubs;
}
export default async function Page() {
  const clubs = await getImages();
  return (
    <div className='px-4 py-16 mx-auto max-w-2xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h1 className='m-4 text-2xl text-center'>Page</h1>

      <div className='grid grid-cols-1 gap-x-6 gap-y-10 bg-blue-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {clubs &&
          clubs.map((club) => <BlurImage key={club.id} href={club.logo_img} />)}
      </div>
    </div>
  );
}
