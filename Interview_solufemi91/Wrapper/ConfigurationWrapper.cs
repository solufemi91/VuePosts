using Interview_solufemi91.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Interview_solufemi91.Wrapper
{
    public class ConfigurationWrapper : IConfigurationWrapper
    {
        private readonly DataSettings _dataSettings;
        public ConfigurationWrapper(IConfiguration config)
        {
            _dataSettings = config.GetSection("DataSettings").Get<DataSettings>();
        }

        public string ConnectionString => _dataSettings.ConnectionString;
    }
}
