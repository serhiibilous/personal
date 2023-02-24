import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface Navigation {
  navigation: any[];
}

export function Navigation({ navigation }: Navigation) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md mb-10">
      <ul role="list" className="divide-y divide-gray-200 ">
        {navigation.map((item) => (
          <li key={item.category}>
            <div className="block hover:bg-gray-50">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm items-baseline">
                      <p className="truncate text-lg font-medium">
                        {item.category}
                      </p>
                      <div className="ml-5">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {item.questions.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <ChevronRightIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
