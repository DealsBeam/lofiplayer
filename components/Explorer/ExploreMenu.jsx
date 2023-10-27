import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';

const ExploreMenu = ({ onStationChange, hideMenu }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="hover:scale-105 active:scale-95 transition ring-2 ring-inset ring-white/20 bg-black/40 text-white p-2 hover:bg-black/30 rounded-xl w-[100px]" onClick={hideMenu}>
          More
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 transition data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className=" fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] data-[state=open]:animate-contentShow w-2/6 rounded-3xl overflow-scroll bg-black/60 text-white p-6 shadow-xl drop-shadow-xl select-none">
          <Dialog.Title className=" text-2xl text-center font-bold mb-6">
            Station Explorer
          </Dialog.Title>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                  onStationChange('Default'); 
                  setOpen(false);
                  hideMenu();
                }
              }
            >
              <Image
                src="/stations/default.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                  onStationChange('Synthwave')
                  setOpen(false);
                  hideMenu();
                }
              }
            >
              <Image
                src="/stations/synthwave.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                  onStationChange('Dreamscape');
                  setOpen(false);
                  hideMenu();
                }
              }
            >
              <Image
                src="/stations/dreamscape.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                onStationChange('Serenity');
                setOpen(false);
                hideMenu();
                }
              }
            >
              <Image
                src="/stations/serenity.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                onStationChange('Ethernal');
                setOpen(false);
                hideMenu();
                }
              }
            >
              <Image
                src="/stations/ethernal.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                onStationChange('Nocturne');
                setOpen(false);
                hideMenu();
                }
              }
            >
              <Image
                src="/stations/nocturne.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                onStationChange('Bliss');
                setOpen(false);
                hideMenu();
                }
              }
            >
              <Image
                src="/stations/bliss.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
            <button
              className='hover:scale-105 active:scale-95 transition'
              onClick={() => {
                onStationChange('Radiant');
                setOpen(false);
                hideMenu();
                }
              }
            >
              <Image
                src="/stations/radiant.png"
                width={100}
                height={100}
                alt="Station 1"
                className='rounded-xl shadow-xl drop-shadow-xl'
              />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ExploreMenu;
